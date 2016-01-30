import mocha from 'mocha';
import {expect} from 'chai';
import sinon from 'sinon';
mocha.setup('bdd');

import {cloneDeep} from 'lodash';

const LS_KEY__MASTERING_STATE_MODIFICATION =
  'javascript.class.lessons.chrome-dev-tools.isMasteringStateModification';
const LS_KEY__MASTERING_CONSOLE_REPL =
  'javascript.class.lessons.chrome-dev-tools.isMasteringConsoleREPL';
const LS_KEY__MASTERING_RESOURCES_PANEL =
  'javascript.class.lessons.chrome-dev-tools.isMasteringResourcesPanel';

// Notes :
// window.localStorage.setItem(<{string} key>, <{string} value>);
// window.localStorage.getItem(<{string} key>);
// window.localStorage.removeItem(<{string} key>);

describe('A good javascript developer', function () {

  context('mastering Chrome Dev Tools', function () {

    it('should master local state modification', function () {
      //////////// **Instructions** ////////////
      // you may NOT modify this test, except uncommenting the line below.
      //debugger; //< you may uncomment this line

      let isMasteringStateModification = '' +
        (window.localStorage.getItem(LS_KEY__MASTERING_STATE_MODIFICATION) || 'Obviously not.');

      console.info(this.test.title + ' : isMasteringStateModification =', isMasteringStateModification);
      console.info(this.test.title + ' : isMasteringStateModification =', isMasteringStateModification);

      window.localStorage.setItem(
        LS_KEY__MASTERING_STATE_MODIFICATION,
        isMasteringStateModification
      );

      expect(
        window.localStorage.getItem(LS_KEY__MASTERING_STATE_MODIFICATION),
        LS_KEY__MASTERING_STATE_MODIFICATION
      ).to.equal('Definitely!');
    });

    it('should master console REPL', function () {
      //////////// **Instructions** ////////////
      // you may NOT modify this test AT ALL
      // you may NOT use the debugger like in previous test !
      expect(
        window.localStorage.getItem(LS_KEY__MASTERING_CONSOLE_REPL),
        LS_KEY__MASTERING_CONSOLE_REPL
      ).to.equal('Definitely!');
    });

    it('should master "resources" panel', function () {
      //////////// **Instructions** ////////////
      // you may NOT modify this test AT ALL
      // you may NOT use the debugger nor the REPL like in previous tests !
      expect(
        window.localStorage.getItem(LS_KEY__MASTERING_RESOURCES_PANEL),
        LS_KEY__MASTERING_RESOURCES_PANEL
      ).to.equal('Definitely!');
    });

    it('should master console display', function () {
      // TODO
    });

    it('should NOT be tricked by console display', function () {
      let object = {};

      console.log(this.test.title + ' : step 1, object is =', object);
      expect(object).to.not.have.property('foo');

      object.foo = 'bar';

      console.log(this.test.title + ' : step 2, object is now =', object);
      expect(object).to.have.property('foo', 'bar');

      object.foo = {
        bar: 0
      };

      console.log(this.test.title + ' : step 3, object is now =', object);
      expect(object).to.have.deep.property('foo.bar', 0);

      object.foo.bar = 42;

      console.log(this.test.title + ' : step 4, object is now =', object);
      expect(object).to.have.deep.property('foo.bar', 42);

      // what ?
      let IUnderstand = false; //< change this when you've managed proper console display !
      //expect(IUnderstand).to.be.true;
    });
  });
});

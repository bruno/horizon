import { applyChange } from '../../src/ast'

const unitAstSuite = global.unitAstSuite = () => {
  describe('applyChanges', () => {
    it('correctly replaces an item with an array id', done => {
      const existingArray = [
        { id: [ 'A', 'B' ], val: 3 },
        { id: [ 'B', 'C' ], val: 4 },
      ]
      const change = {
        type: 'change',
        new_offset: null,
        old_offset: null,
        old_val: {
          id: [ 'B', 'C' ],
          val: 4,
        },
        new_val: {
          id: [ 'B', 'C' ],
          val: 5,
        },
      }
      const expected = [
        { id: [ 'A', 'B' ], val: 3 },
        { id: [ 'B', 'C' ], val: 5 },
      ]
      const obtained = applyChange(existingArray, change)
      assert.deepEqual(obtained, expected)
      done()
    })
  })
}

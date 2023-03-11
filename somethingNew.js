/*---------------------------------------------------------------------------------
            LET's LEARN NEW SOMETHING..
*/


// How To Pass Key Value Conditionally In Javascript.

const obj = {
   ...(condition) && {someprop: propvalue},
   ...otherprops
}

const obj = {
  ...(true) && {someprop: 42},
  ...(false) && {nonprop: "foo"},
  ...({}) && {tricky: "hello"},
}

console.log(obj);

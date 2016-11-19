const myComplexObject = {
  leaf_1: 1,
  branch_1: {
    leaf_1: 1,
    leaf_2: 2,
    branch_1: {
      leaf_1:1,
      leaf_2:2
    }
  },
  branch_2: {
    leaf_1:1,
    leaf_2:2
  }
}

const { leaf_1: l1, branch_1: { leaf_1: l11, leaf_2:l12, branch_1: {leaf_1:l111, leaf_2:l112} }, branch_2: {leaf_1:l21, leaf_2:l22} }  = myComplexObject

console.log(l11, l112)

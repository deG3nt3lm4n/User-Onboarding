import * as yup from 'yup'

export default yup.object().shape({
  name: yup.string().required('Please just a good name').min(3 , 'Longer name'),
  email: yup.string().required('Please be valid'),
  password: yup.string().required('Please valid').min(5, 'Make it secure!'),
  terms: yup.boolean(true).required('Read and check.. please')
})
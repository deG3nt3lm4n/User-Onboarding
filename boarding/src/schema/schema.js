import * as yup from 'yup'

export default yup.object().shape({
  first_name: yup.string().required('Please just a good name').min(3 , 'Longer name'),
  last_name: yup.string().required('Please just a good name').min(3 , 'Longer name'),
  avatar: yup.string(),
  email: yup.string().required('Please be valid'),
  password: yup.string().required('Please valid').min(5, 'Make it secure!'),
  role: yup.string().oneOf(['student','hacker','developer'], 'Please choose one...'),
  terms: yup.boolean(true).required('Read and check.. please')
})


export default function authenticationCheck(){
  if(localStorage.getItem('userInfo') == null) {
      this.props.history.push('/');
   }
}
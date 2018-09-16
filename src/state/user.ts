import { Container } from 'unstated'
import axios from 'axios'

interface UserState {}

export class UserContainer extends Container<UserState> {
  state = {}

  async login(email: string, password: string) {
    const response = await axios.post('http://tt.test/login', {
      email,
      password,
    })
    localStorage.setItem('token', response.data.token)
  }
}

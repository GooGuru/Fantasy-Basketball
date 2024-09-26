import { gql } from '@apollo/client'

export const LoggedIn_User = gql`
    mutation login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
           token
            user {
                email
            }
        }
    }
`;
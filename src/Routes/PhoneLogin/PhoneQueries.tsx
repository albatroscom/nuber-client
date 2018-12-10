import { gql } from 'apollo-boost';
export const PHONE_SIGN_IN = gql`
    mutaion startPhoneVerification(phoneNumber: String!) {
        startPhoneVerification(phoneNumber: $phoneNumber) {
            ok
            error
        }
    }
`;
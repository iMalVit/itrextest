const requestURL = 'https://itrex-react-lab-files.s3.eu-central-1.amazonaws.com/react-test-api.json';

export const getData = async () => (await fetch(requestURL)).json();

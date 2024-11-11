const URL = 'https://raw.githubusercontent.com/Skill-risers/pizzajson/main/pizza.json';

async function makeNetworkCall() {
  try {
    const response = await fetch(URL);
    const object = await response.json();
    return object;
  } catch (err) {
    console.log('Some Problem in API Call ', err);
    throw err;
  }
}

export default makeNetworkCall;

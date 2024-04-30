import React, { useState } from 'react';

const App = () => {
  const [greeting, setGreeting] = useState('stay safe!');

  const handlePress = () => {
    setGreeting('a woman with voice, is by definition, a strong woman!');
  };

  return (
    <div style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>{greeting}</Text>
      <Button title="Change Greeting" onPress={handlePress} />
    </div>
  );
};

export default App;

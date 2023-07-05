const [creds, setCreds] = useState({
  email: '',
  password: '',
});
const [error, setError] = useState({
  email: false,
  password: false,
});

const handleChange = (event: any) => {
  const value = event.target.value.split(' ').join('');
  if (value >= 0) {
    setError({
      ...error,
      [event.target.id]: true,
    });
  } else {
    setError({
      ...error,
      [event.target.id]: false,
    });
  }
  setCreds({
    ...creds,
    [event.target.id]: value,
  });
};

// component
<TextField
  ...
  id="email"
  placeholder="Email"
  name="email"
  onChange={handleChange}
  value={creds.email}
  ...
/>

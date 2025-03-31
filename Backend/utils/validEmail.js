function isValidEmail(email)
{
  const emailRegex = /^[^\s@]+@gmail\.com$/;
  return emailRegex.test(email);
}

module.exports = isValidEmail;
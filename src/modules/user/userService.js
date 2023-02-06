let users = []

const getUserByEmail = (searchEmail) => users.find((obj) => obj.email === searchEmail )

export const signup = (data) => {
  if (getUserByEmail(data.email)) {
    console.log("EMAIL EXISTENTE")
  } else {
    users.push(data)
  }
  return true
} 
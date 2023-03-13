export const fetchCount = async (amount: number) => {
  let response = await fetch(`someurl/${amount}`)
  return response.json()
}
async function fetchProfileData() {
    const url = 'https://raw.githubusercontent.com/MADCarvalho/Portifolio_Marco_Carvalho/main/data/profile.json'
    const fetching = await fetch(url)
    
    return await fetching.json()
  }
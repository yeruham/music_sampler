export const prefixUrl = "http://localhost:3000";
export const basicUrl = `${prefixUrl}/instruments`;


export async function getInstruments(): Promise<string[] | undefined>{
    try{
      const response = await fetch(basicUrl);
      if (response.ok){
        const instruments = await response.json();
        return instruments;
      }
    }
    catch (err){
      console.log(err)
    }
}


export async function getUrlsOfInstrument(instrument: string, addPrefix: boolean=true): Promise<{ [key: string]: string } | undefined>{
    const url = `${basicUrl}/${instrument}`;
    try{
      const response = await fetch(url);
      if (response.ok){
        const notesUrls = await response.json();
        if (notesUrls && addPrefix){
          return addPrefixUrls(notesUrls);
        }
        else{
          return notesUrls;
        } 
      }
    }
    catch (err){
      console.log(err)
    }
}

function addPrefixUrls(urls: {[key: string]: string}): {[key: string]: string}{
  const fullUrls: {[key: string]: string} = {}
  const keys = Object.keys(urls);
  keys.forEach((key) => {
    const fullUrl = `${prefixUrl}/${urls[key]}`;
    fullUrls[key] = fullUrl;
  })
  return fullUrls;
}
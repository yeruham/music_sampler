export const prefixUrl =  "http://localhost:3000";
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


export async function getUrlsOfInstrument(instrument: string, addPrefix: boolean=true, sorted: boolean=true): Promise<{ [key: string]: string } | undefined>{
    const url = `${basicUrl}/${instrument}`;
    try{
      const response = await fetch(url);
      if (response.ok){
        let notesUrls = await response.json();
        if (notesUrls && addPrefix){
          notesUrls = addPrefixUrls(notesUrls);
        }
        if (sorted){
          notesUrls = sortNotesUrls(notesUrls);
        }
          return notesUrls;
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

function sortNotesUrls(urls: {[key: string]: string}): {[key: string]: string}{
  const listUrls = Object.entries(urls);
  listUrls.sort((a, b) => {
    const order = "CDEFGHIJKLMNOPQRSTUVWXYZAB";
    return order.indexOf(a[0][0].toUpperCase()) - order.indexOf(b[0][0].toUpperCase());
  });
  const fullUrls = Object.fromEntries(listUrls);
  return fullUrls;
}
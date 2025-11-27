export const basicUrl = "http://localhost:3000/instruments";

export async function getInstruments(): Promise<string[] | undefined>{
    try{
      const response = await fetch(basicUrl);
      if (response.ok){
        const instruments = await response.json();
        return instruments;
      }
    }
    catch{
      
    }
}


export async function getUrlsOfInstrument(instrument: string): Promise<{ [key: string]: string } | undefined>{
    const url = `${basicUrl}/${instrument}`;
    try{
      const response = await fetch(url);
      if (response.ok){
        const notesUrls = await response.json();
        return notesUrls; 
      }
    }
    catch{

    }
}
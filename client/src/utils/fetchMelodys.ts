export const server = "http://localhost:3000";
export const melodysUrl = `${server}/melodys`;

export const getMelodysNames = async () => {
  try {
    const response = await fetch(melodysUrl);
    if (response.ok) {
      const melodysNames = await response.json();
      return melodysNames;
    }
  } catch (err) {
    console.log(err);
  }
};

export const getMelody = async (melodyName: string) => {
  try {
    const url = `${melodysUrl}/${melodyName}`;
    const response = await fetch(url);
    if (response.ok) {
      const melody = await response.json();
      return melody;
    }
  } catch (err) {
    console.log(err);
  }
};

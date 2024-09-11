const API_KEY = "9cfc18f5-4b59-4d0d-94d7-c06ab5b1c807";

export async function fetchListings() {
  try {
    const response = await fetch(
      "https://api.real-estate-manager.redberryinternship.ge/api/real-estates",
      {
        headers: {
          Authorization: `Bearer ${API_KEY}`,
        },
      }
    );
    if (!response.ok) {
      throw new Error("response not ok");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function fetchRegions() {
  try {
    const response = await fetch(
      "https://api.real-estate-manager.redberryinternship.ge/api/regions",
      {
        headers: {
          Authorization: `Bearer ${API_KEY}`,
        },
      }
    );
    if (!response.ok) {
      throw new Error("response not ok");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}


export const netflix_logo="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";

export const default_avtar = "https://occ-0-444-448.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABXz4LMjJFidX8MxhZ6qro8PBTjmHbxlaLAbk45W1DXbKsAIOwyHQPiMAuUnF1G24CLi7InJHK4Ge4jkXul1xIW49Dr5S7fc.png?r=e6e";

export const api_options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
   // Authorization: 
   Authorization: 'Bearer'+import.meta.env.VITE_TMDB_KEY  
  }
};
export const img_cdn_url = "https://image.tmdb.org/t/p/w400";
export const bg_img = "https://assets.nflxext.com/ffe/siteui/vlv3/98df3030-1c2b-4bd1-a2f5-13c611857edb/web/US-en-20250331-TRIFECTA-perspective_af0ac1e5-ee28-4f5b-be31-df183943d90f_small.jpg";

export const SupportedLanguages = [
  {identifier:"en",name:"English"},
  {identifier:"hindi",name:"Hindi"},
  {identifier:"french",name:"French"},
];

export const openAi_Key = import.meta.env.VITE_openAi_Key
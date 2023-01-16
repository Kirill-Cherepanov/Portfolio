type Props = {
  charset?: string;
};

export const convertObjToBlob = (
  obj: object,
  { charset = 'utf-8' }: Props = {}
) => {
  const str = JSON.stringify(obj);
  const bytes = new TextEncoder().encode(str);
  return new Blob([bytes], {
    type: `application/json;charset=${charset}`,
  });
};

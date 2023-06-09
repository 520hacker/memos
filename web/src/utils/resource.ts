export const getResourceUrl = (resource: Resource, withOrigin = true) => {
  if (resource.externalLink) {
    return resource.externalLink;
  }

  return `${withOrigin ? "https://2504.qiangtu.com:5231/" : ""}/o/r/${resource.id}/${resource.publicId}/${resource.filename}`;
};

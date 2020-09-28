const replacements = {
  'α':'a',
  'β':'b'
};

export const create_slug = function(slug:string):string{
  for (var i in replacements) {
     slug = slug.replace(i, replacements[i]);
  };

  return slug; 
}

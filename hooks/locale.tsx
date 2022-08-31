import { useRouter } from 'next/router';

export const AR = (
  ifTrue: string | HTMLElement = null,
  ifFalse: string | HTMLElement = null
) => {
  const { locale } = useRouter();

  const isAR = locale.toLocaleLowerCase() == 'ar';

  if (ifTrue == null && ifFalse == null) {
    return isAR;
  }

  if (ifTrue != null && isAR) {
    return ifTrue;
  }

  if (ifFalse != null && !isAR) {
    return ifFalse;
  }

  return null;
};

export const fixTranslations = (obj: any) => {
  if(!obj)
    return;
  
  let { locale } = useRouter();
  locale = locale.toLocaleLowerCase();

  const fixField = (field, translatedField) => {
    if (translatedField in obj && field in obj) {
      if (
        obj[translatedField] &&
        locale in obj[translatedField] &&
        obj[translatedField][locale]
      )
        obj[field] = obj[translatedField][locale];
    }
  };

  fixField('title', 'title_translated');
  fixField('name', 'name_translated');
  fixField('description', 'description_translated');
  fixField('author', 'author_translated');
  fixField('maintainer', 'maintainer_translated');

};

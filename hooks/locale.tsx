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

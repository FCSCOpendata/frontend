import { AR } from '../../hooks/locale';
import useTranslation from 'next-translate/useTranslation';
import { useState, useEffect } from 'react';
import { Rating } from 'react-simple-star-rating';
import StarIcon from './StarIcon';
import getConfig from 'next/config';

const Rate: React.FC<{
  title: string;
  id: string;
}> = ({ title, id }) => {
  const [rating, setRating] = useState(0);
  const { t } = useTranslation('common');
  useEffect(() => {
    fetch(
      `${
        getConfig().publicRuntimeConfig.DMS
      }/api/3/action/rating_package_get?package_id=${id}`
    )
      .then((res) => res.json())
      .then((res) => {
        console.log('RESULT: ', res);
        setRating(res.result.rating * 20);
      });
  }, []);

  const handleRating = (rate) => {
    fetch(
      `${
        getConfig().publicRuntimeConfig.DMS
      }/api/3/action/rating_package_create`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          package: id,
          rating: rate / 20,
        }),
      }
    ).catch((err) => console.log(err));
    setRating(rate);
  };

  return (
    <span className={`text-[#1F356C] ${AR('ml-2', 'mr-2')}}`}>
      <Rating
        onClick={handleRating}
        ratingValue={rating}
        size={15}
        allowHover={false}
        transition
        showTooltip
        rtl={AR(true, false) as boolean}
        emptyIcon={<StarIcon size={15} />}
        tooltipDefaultText={`${t('no-rating')}`}
        tooltipArray={[
          t('bad'),
          t('passable'),
          t('ok'),
          t('good'),
          t('excellent'),
        ]}
      />
    </span>
  );
};

export default Rate;

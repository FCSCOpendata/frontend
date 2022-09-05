import { useRouter } from 'next/router';
import { useQuery } from '@apollo/react-hooks';
import { ErrorMessage, Spinner } from '../../_shared';
import { GET_ORGS_BY_DATASETS_COUNT_QUERY } from '../../../graphql/queries';
import { fixTranslations } from '../../../hooks/locale';
import useTranslation from 'next-translate/useTranslation';

export default function Orgs() {
  const { t } = useTranslation('common');
  const router = useRouter();

  function showInfo(e) {
    const index = e.target.getAttribute('id').split('-')[1];
    document
      .getElementsByTagName('text')
      [index].setAttribute('class', 'block');
    document.getElementsByTagName('ellipse')[index].style.fill = '#54CA59';
  }

  function hideInfo(e) {
    const index = e.target.getAttribute('id').split('-')[1];
    document
      .getElementsByTagName('text')
      [index].setAttribute('class', 'hidden');
    document.getElementsByTagName('ellipse')[index].style.fill = '#00A3FF';
  }

  const { data, loading, error } = useQuery(GET_ORGS_BY_DATASETS_COUNT_QUERY, {
    variables: { limit: 20 },
    // Setting this value to true will make the component rerender when
    // the "networkStatus" changes, so we are able to know if it is fetching
    // more data
    notifyOnNetworkStatusChange: true,
  });

  if (error) return <ErrorMessage message="Error loading organizations." />;
  if (loading) return <Spinner />;

  const result = data.orgs.result.filter((org) => org.total > 0);

  const ellipsePositions = [
    [499.934, 246.404],
    [771.145, 124.366],
    [857.527, 311.998],
    [1100.2, 150.714],
    [1110.39, 377.113],
    [1276.72, 260.737],
    [1356.06, 171.885],
    [1401.61, 278.407],
    [953.199, 523.188],
    [1338.02, 564.899],
    [835.832, 613.618],
    [774.121, 533.384],
    [508.473, 524.705],
    [425.965, 452.998],
    [268.012, 534.9],
    [154.277, 549.431],
    [59.1369, 346.559],
    [298.371, 371.567],
    [353.942, 281.682],
    [229.145, 97.4343],
  ].slice(0, result.length);

  result.forEach((org) => fixTranslations(org));

  return (
    <svg
      className="w-full"
      viewBox="0 0 1456 700"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_2_1702)">
        {ellipsePositions.map((item, index) => {
          return (
            <ellipse
              key={`ellipse-${index}`}
              rx="41.2293"
              ry="41.2293"
              transform={`matrix(0.999931 0.0117487 -0.0117535 0.999931 ${item[0]} ${item[1]})`}
              fill="#00A3FF"
              fillOpacity="0.6"
            />
          );
        })}
        {ellipsePositions.map((item, index) => {
          return (
            <>
              <circle
                key={`circle-1-${index}`}
                id={`circle-${index}`}
                onMouseOver={showInfo}
                onMouseLeave={hideInfo}
                onClick={() => router.push(`/@${result[index].name}`)}
                cx={item[0] - 0.001}
                cy={item[1]}
                r="30.0159"
                fill={`#ffffff`}
                stroke="#ffffff"
                strokeWidth="3"
              />
              <circle
                key={`circle-2-${index}`}
                id={`circle-${index}`}
                onMouseOver={showInfo}
                onMouseLeave={hideInfo}
                onClick={() => router.push(`/@${result[index].name}`)}
                cx={item[0] - 0.001}
                cy={item[1]}
                r="30.0159"
                fill={`url(#pattern${index})`}
                stroke="#F7FAFC"
                strokeWidth="3"
              />
            </>
          );
        })}
        {result.map((org, index) => {
          return (
            <text
              className="hidden"
              key={`info-${index}`}
              x={ellipsePositions[index][0]}
              y={ellipsePositions[index][1]}
            >
              <tspan
                className="font-normal"
                fill="black"
                stroke="black"
                dx="0em"
                dy="4.5em"
                textAnchor="middle"
              >
                {org.title}
              </tspan>
              <tspan
                className="font-semibold"
                fill="#54CA59"
                stroke="#54CA59"
                x={ellipsePositions[index][0]}
                dy="1.5em"
                textAnchor="middle"
              >
                {org.total + ` ${t('dataset-plural')}`}
              </tspan>
            </text>
          );
        })}
      </g>
      <defs>
        {[...Array(21)].map((item, index) => (
          <pattern
            key={`pattern-${index}`}
            id={`pattern${index}`}
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use
              xlinkHref={`#image${index}_2_1702`}
              transform="translate(-0.253448) scale(0.00172414)"
            />
          </pattern>
        ))}
        <clipPath id="clip0_2_1702">
          <rect
            width="1455"
            height="699"
            fill="white"
            transform="translate(0.574219 0.703203)"
          />
        </clipPath>
        {result.map((org, index) => (
          <image
            key={`org-image-${index}`}
            id={`image${index}_2_1702`}
            width="870"
            height="580"
            xlinkHref={org.image_display_url || '/images/org-default.svg'}
          />
        ))}
      </defs>
    </svg>
  );
}

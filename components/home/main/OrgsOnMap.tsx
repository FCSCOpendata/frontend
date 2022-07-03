import { useRouter } from 'next/router';
import { useQuery } from '@apollo/react-hooks';
import { ErrorMessage } from '../../_shared';
import { GET_ORGS_QUERY } from '../../../graphql/queries';

export default function Orgs() {
  const router = useRouter();

  function makeGreen(e) {
    e.target.style.fill = '#54CA59';
  }

  function makeBlue(e) {
    e.target.style.fill = '#00A3FF';
  }

  function showInfo(e) {
    const index = e.target.getAttribute('id').split('-')[1];
    document
      .getElementsByTagName('text')
      [index].setAttribute('class', 'block');
  }

  function hideInfo(e) {
    const index = e.target.getAttribute('id').split('-')[1];
    document
      .getElementsByTagName('text')
      [index].setAttribute('class', 'hidden');
  }

  const organizations = [
    'central-bank-united-arab-emirates',
    'dubaipulse',
    'federal-authority-nuclear-regulation',
    'federal-competitiveness-and-statistics-center',
    'federal-customs-authority',
    'federal-electricity-water-authority',
    'ministry-climate-change-environment',
    'ministry-community-development',
    'ministry-culture-knowledge-development',
    'ministry-economy',
    'ministry-education',
    'ministry-energy-industry',
    'ministry-finance',
    'ministry-foreign-affairs-and-international-cooperation',
    'ministry-health-and-prevention',
    'ministry-human-resources-emiratizations',
    'ministry-infrastructure-development',
    'ministry-interior',
    'ministry-justice',
    'ministry-state-federal-national-council-affairs',
  ];

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
  ];

  const { loading, error, data } = useQuery(GET_ORGS_QUERY, {
    variables: { organizations, all_fields: true },
    // Setting this value to true will make the component rerender when
    // the "networkStatus" changes, so we are able to know if it is fetching
    // more data
    notifyOnNetworkStatusChange: true,
  });

  if (error) return <ErrorMessage message="Error loading dataset." />;
  if (loading) return <div>Loading</div>;

  const result = data.orgs.result.slice(0, 20);

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
              onMouseOver={makeGreen}
              onMouseLeave={makeBlue}
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
            <circle
              key={`circle-${index}`}
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
                stroke="black"
                strokeWidth="1.5px"
                dx="0em"
                dy="4.5em"
                textAnchor="middle"
              >
                {org.title}
              </tspan>
              <tspan
                stroke="#54CA59"
                strokeWidth="1.5px"
                x={ellipsePositions[index][0]}
                dy="1.5em"
                textAnchor="middle"
              >
                {org.total + ' datasets'}
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
            transform="translate(0.574219 0.783203)"
          />
        </clipPath>
        {result.map((org, index) => (
          <image
            key={`org-image-${index}`}
            id={`image${index}_2_1702`}
            width="870"
            height="580"
            xlinkHref={org.image || '/images/org-default.svg'}
          />
        ))}
      </defs>
    </svg>
  );
}

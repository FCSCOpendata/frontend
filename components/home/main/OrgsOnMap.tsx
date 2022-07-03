import { useQuery } from '@apollo/react-hooks';
import { ErrorMessage } from '../../_shared';
import { GET_ORGS_QUERY } from '../../../graphql/queries';

export default function Orgs() {
  function makeGreen(e) {
    e.target.style.fill = '#54CA59';
  }

  function makeBlue(e) {
    e.target.style.fill = '#00A3FF';
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

  const { result } = data.orgs;

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
        <circle
          cx="857.523"
          cy="311.998"
          r="30.0159"
          fill="url(#pattern0)"
          stroke="#F7FAFC"
          strokeWidth="3"
        />
        <circle
          cx="770.497"
          cy="124.365"
          r="30.0159"
          fill="url(#pattern1)"
          stroke="#F7FAFC"
          strokeWidth="3"
        />
        <circle
          cx="500.141"
          cy="245.503"
          r="30.5159"
          fill="url(#pattern2)"
          stroke="#F7FAFC"
          strokeWidth="2"
        />
        <circle
          cx="353.94"
          cy="281.681"
          r="30.0159"
          fill="url(#pattern3)"
          stroke="#F7FAFC"
          strokeWidth="3"
        />
        <circle
          cx="297.223"
          cy="371.567"
          r="30.0159"
          fill="url(#pattern4)"
          stroke="#F7FAFC"
          strokeWidth="3"
        />
        <circle
          cx="229.144"
          cy="97.4343"
          r="30.0159"
          fill="url(#pattern5)"
          stroke="#F7FAFC"
          strokeWidth="3"
        />
        <circle
          cx="425.966"
          cy="453.493"
          r="30.0159"
          fill="url(#pattern6)"
          stroke="#F7FAFC"
          strokeWidth="3"
        />
        <circle
          cx="268.013"
          cy="533.606"
          r="30.0159"
          fill="url(#pattern7)"
          stroke="#F7FAFC"
          strokeWidth="3"
        />
        <circle
          cx="154.275"
          cy="549.431"
          r="30.0159"
          fill="url(#pattern8)"
          stroke="#F7FAFC"
          strokeWidth="3"
        />
        <circle
          cx="508.357"
          cy="524.705"
          r="30.0159"
          fill="url(#pattern9)"
          stroke="#F7FAFC"
          strokeWidth="3"
        />
        <circle
          cx="774.12"
          cy="533.383"
          r="30.0159"
          fill="url(#pattern10)"
          stroke="#F7FAFC"
          strokeWidth="3"
        />
        <circle
          cx="59.1333"
          cy="345.823"
          r="30.0159"
          fill="url(#pattern11)"
          stroke="#F7FAFC"
          strokeWidth="3"
        />
        <circle
          cx="-27.333"
          cy="97.4349"
          r="30.0159"
          fill="url(#pattern12)"
          stroke="#F7FAFC"
          strokeWidth="3"
        />
        <circle
          cx="1338.58"
          cy="564.899"
          r="30.0159"
          fill="url(#pattern13)"
          stroke="#F7FAFC"
          strokeWidth="3"
        />
        <circle
          cx="1401.61"
          cy="277.02"
          r="30.0159"
          fill="url(#pattern14)"
          stroke="#F7FAFC"
          strokeWidth="3"
        />
        <circle
          cx="1276.72"
          cy="259.456"
          r="30.0159"
          fill="url(#pattern15)"
          stroke="#F7FAFC"
          strokeWidth="3"
        />
        <circle
          cx="1110.35"
          cy="376.752"
          r="30.0159"
          fill="url(#pattern16)"
          stroke="#F7FAFC"
          strokeWidth="3"
        />
        <circle
          cx="1100.2"
          cy="150.425"
          r="30.0159"
          fill="url(#pattern17)"
          stroke="#F7FAFC"
          strokeWidth="3"
        />
        <circle
          cx="1356.44"
          cy="171.885"
          r="30.0159"
          fill="url(#pattern18)"
          stroke="#F7FAFC"
          strokeWidth="3"
        />
        <circle
          cx="835.834"
          cy="613.617"
          r="30.0159"
          fill="url(#pattern19)"
          stroke="#F7FAFC"
          strokeWidth="3"
        />
        <circle
          cx="953.197"
          cy="522.396"
          r="30.0159"
          fill="url(#pattern20)"
          stroke="#F7FAFC"
          strokeWidth="3"
        />
      </g>
      <defs>
        <pattern
          id="pattern0"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use
            xlinkHref="#image0_2_1702"
            transform="translate(-0.25) scale(0.00172414)"
          />
        </pattern>
        <pattern
          id="pattern1"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use
            xlinkHref="#image1_2_1702"
            transform="translate(-0.25) scale(0.00172414)"
          />
        </pattern>
        <pattern
          id="pattern2"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use
            xlinkHref="#image2_2_1702"
            transform="translate(-0.25) scale(0.00172414)"
          />
        </pattern>
        <pattern
          id="pattern3"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use
            xlinkHref="#image3_2_1702"
            transform="translate(0 -0.250646) scale(0.00258398)"
          />
        </pattern>
        <pattern
          id="pattern4"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use
            xlinkHref="#image4_2_1702"
            transform="translate(-0.25) scale(0.00172414)"
          />
        </pattern>
        <pattern
          id="pattern5"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use
            xlinkHref="#image5_2_1702"
            transform="translate(-0.388518) scale(0.00133511)"
          />
        </pattern>
        <pattern
          id="pattern6"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use
            xlinkHref="#image6_2_1702"
            transform="translate(-0.240517) scale(0.00172414)"
          />
        </pattern>
        <pattern
          id="pattern7"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use
            xlinkHref="#image7_2_1702"
            transform="translate(0 -0.248711) scale(0.00257732)"
          />
        </pattern>
        <pattern
          id="pattern8"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use
            xlinkHref="#image8_2_1702"
            transform="translate(-0.134483) scale(0.00172414)"
          />
        </pattern>
        <pattern
          id="pattern9"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use
            xlinkHref="#image9_2_1702"
            transform="translate(-0.253448) scale(0.00172414)"
          />
        </pattern>
        <pattern
          id="pattern10"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use
            xlinkHref="#image10_2_1702"
            transform="translate(-0.389186) scale(0.00133511)"
          />
        </pattern>
        <pattern
          id="pattern11"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use
            xlinkHref="#image11_2_1702"
            transform="translate(-0.389186) scale(0.00133511)"
          />
        </pattern>
        <pattern
          id="pattern12"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use
            xlinkHref="#image12_2_1702"
            transform="translate(-0.166093) scale(0.00172117)"
          />
        </pattern>
        <pattern
          id="pattern13"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use
            xlinkHref="#image13_2_1702"
            transform="translate(-0.25) scale(0.00172414)"
          />
        </pattern>
        <pattern
          id="pattern14"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use
            xlinkHref="#image14_2_1702"
            transform="translate(0 -0.249) scale(0.002)"
          />
        </pattern>
        <pattern
          id="pattern15"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use
            xlinkHref="#image15_2_1702"
            transform="translate(-0.231897) scale(0.00172414)"
          />
        </pattern>
        <pattern
          id="pattern16"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use
            xlinkHref="#image16_2_1702"
            transform="translate(-0.388518) scale(0.00133511)"
          />
        </pattern>
        <pattern
          id="pattern17"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use
            xlinkHref="#image17_2_1702"
            transform="translate(-0.448509) scale(0.00135501)"
          />
        </pattern>
        <pattern
          id="pattern18"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use
            xlinkHref="#image18_2_1702"
            transform="translate(-0.166093) scale(0.00172117)"
          />
        </pattern>
        <pattern
          id="pattern19"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use
            xlinkHref="#image19_2_1702"
            transform="translate(-0.339262) scale(0.00131752)"
          />
        </pattern>
        <pattern
          id="pattern20"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use xlinkHref="#image20_2_1702" transform="scale(0.00172414)" />
        </pattern>
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
            xlinkHref={org.image}
          />
        ))}
      </defs>
    </svg>
  );
}

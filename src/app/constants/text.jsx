export const FirstFrameQ = [
  {
    text: "Top cloud costs by services in production account (#24542)",
    disabled: false,
  },
  {
    text: "Which application's cost are increasing the fastest?",
    disabled: true,
  },
  {
    text: "How much money are we losing by not moving to graviton instances?",
    disabled: true,
  },
  {
    text: "Which are the largest s3 buckets by size?",
    disabled: true,
  },
];

export const SecondFrameQ = [
  {
    text: "Which services cost are rising the fastest?",
    disabled: true,
  },
  {
    text: "How can I reduce my S3 costs?",
    disabled: true,
  },
  {
    text: "How can I reduce my RDS costs?",
    disabled: true,
  },
  {
    text: "How can I reduce my EC2 costs?",
    disabled: false,
  },
];

export const ThirdFrameQ = [
  {
    text: "Which services cost are rising the fastest?",
    disabled: true,
  },
  {
    text: "How can I reduce my S3 costs?",
    disabled: true,
  },
  {
    text: "How can I reduce my RDS costs?",
    disabled: true,
  },
  {
    text: "Why are EC2 costs increasing so much?",
    disabled: false,
  },
];

export const DonutData = [
  { name: "EC2", value: 30 },
  { name: "RDS", value: 20 },
  { name: "S3", value: 20 },
  { name: "OpenSearch", value: 10 },
  { name: "ElasticCache", value: 10 },
  { name: "Others", value: 10 },
];

export const SankeyData = [
  ["From", "To", "Weight"],
  ["Excess Costs: 2,500", "Production: 2,000", 2000],
  ["Excess Costs: 2,500", "Staging: 300", 300],
  ["Excess Costs: 2,500", "Analytics: 200", 200],
  ["Production: 2,000", "Purpose: 800", 800],
  ["Production: 2,000", "Customers: 600", 600],
  ["Production: 2,000", "Product: 600", 600],
  ["Purpose: 800", "Web App: 700", 700],
  ["Purpose: 800", "Api: 240", 240],
  ["Purpose: 800", "Workflow: 160", 160],
  ["Customers: 600", "Amex", 420],
  ["Customers: 600", "Citi", 180],
  ["Product: 600", "Web App", 700],
  ["Product: 600", "Mobile App", 180],
  ["Product: 600", "Chat", 120],
];

export const IFRAME_SOURCE =
  "https://codesandbox.io/p/sandbox/iframe-for-astuto-m6cvzr?file=%2Findex.html%3A11%2C13";

export const savingDetail = [
  {
    title: "Bucket xyz-logs-1 (production account #12345)",
    desc: "This bucket has 1 TB of data, and it does not use any storage tiers. There is more than 500 GB of data that has not been accessed. You can save $1000 by deleting that data or $700 by moving them to lower tier.",
  },
  {
    title: "Bucket abc-user-1 (production account #12345)",
    desc: "This bucket has abnormally high reads and writes cost of $5000 per month, increasing by the day. Consider reading smaller chunks of data or changing your storage that is more cost effective for reads and writes.",
  },
];
export const MIGHT_KNOW_TEXT = "You might also want to know";
export const AccumulatedCostText =
  "`Your production account (#24542) has accumulated costs of $100,000 over the past month, here is a spread of cloud costs by services;`";
export const SavingAreas = `You can save $2500 per month overall in EC2 costs. Click here to access a detailed report. Here are your top 2 saving areas:`;
export const ProductionAccountText =
  "Your production account (#24542) has accumulated costs of $100,000 over the past month, here is a spread of cloud costs by services;";

export const SQLData = [
  "1. SELECT",
  "2. service,",
  "3. SUM(cost) AS total_cost",
  " 4. FROM",
  "5. cloud_costs",
  "6. WHERE",
  " 7. account_type = 'production (#24542)'",
  "8. GROUP BY",
];

// EXTRAS

// // Ref to access the iframe content
// const iframeRef = useRef(null);

// // SQL code to display
// const sqlCode = `SELECT
//                       service,
//                       SUM(cost) AS total_cost
//                   FROM
//                       cloud_costs
//                   WHERE
//                       account_type = 'production (#24542)'
//                   GROUP BY
//                       service`;

// useEffect(() => {
//   if (iframeRef.current) {
//     setIframeReady(true);
//   }
// }, [isSQLProcessing]);

// useEffect(() => {
//   if (iframeReady) {
//     const iframeDocument = iframeRef.current.contentDocument;
//     if (iframeDocument) {
//       iframeDocument.write("<pre>" + sqlCode + "</pre>");
//     }
//   }
// }, [iframeReady, sqlCode, isSQLProcessing]);

// body={<IFrame src={IFRAME_SOURCE} />}
// body={
// <iframe
//   onLoad={() => setIframeReady(true)}
//   ref={iframeRef}
//   title="sqlCode"
//   width="100%"
//   height="200"
// ></iframe>
// }

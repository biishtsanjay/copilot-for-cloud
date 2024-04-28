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

export const DonutData = [
  { name: "EC2", value: 30 },
  { name: "RDS", value: 20 },
  { name: "S3", value: 20 },
  { name: "OpenSearch", value: 10 },
  { name: "ElasticCache", value: 10 },
  { name: "Others", value: 10 },
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

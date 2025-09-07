// middleware
//  req => middleware => res
// you must must must put next() in the end
const logger = (req, res, next) => {
  const method = req.method;
  const url = req.url;
  const time = new Date().getFullYear();
  console.log(method, url, time);
  next();
};

export default logger;

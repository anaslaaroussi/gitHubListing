const number_per_page = 30;
const days = 30;
const d = new Date();
d.setDate(d.getDate() - days);
const formatedDate = `${d.getFullYear()}-0${d.getMonth() + 1}-${d.getDate()}`;

// github url is missing the page number (I will add it in the fetch method ) , this let me render the page dynamically

export const github_url = `https://api.github.com/search/repositories?q=created:${formatedDate}&sort=stars&order=desc&per_page=${number_per_page}&page=`;

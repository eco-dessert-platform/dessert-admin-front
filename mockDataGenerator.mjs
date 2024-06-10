
import fs from 'fs';

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  

  function generateMockData(date) {
    return {
      date: date.toISOString().split('T')[0], 
      value: getRandomInt(1, 100) 
    };
  }
  

  function generateYearlyMockData() {
    const mockData = [];
    const currentYear = new Date().getFullYear();
    let date = new Date(currentYear, 0, 1); 
  
    while (date.getFullYear() === currentYear) {
      mockData.push(generateMockData(new Date(date)));
      date.setDate(date.getDate() + 1);
    }
  
    return mockData;
  }
  

  const yearlyMockData = generateYearlyMockData();
  
  console.log(yearlyMockData);

  
  fs.writeFileSync("mock.json", JSON.stringify(yearlyMockData));
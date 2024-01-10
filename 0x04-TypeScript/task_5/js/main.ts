const majorBrand = Symbol('major');
const minorBrand = Symbol('minor');

interface MajorCredits {
  credits: number;
  brand: typeof majorBrand;
}

interface MinorCredits {
  credits: number;
  brand: typeof minorBrand;
}

function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  return { credits: subject1.credits + subject2.credits, brand: majorBrand };
}

function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  return { credits: subject1.credits + subject2.credits, brand: minorBrand };
}

const subject1: MajorCredits = {
  credits: 50,
  brand: majorBrand,
};

const subject2: MajorCredits = {
  credits: 30,
  brand: majorBrand,
};

const resultMajor = sumMajorCredits(subject1, subject2);
console.log(resultMajor);

const subject3: MinorCredits = {
  credits: 20,
  brand: minorBrand,
};

const subject4: MinorCredits = {
  credits: 10,
  brand: minorBrand,
};

const resultMinor = sumMinorCredits(subject3, subject4);
console.log(resultMinor);

const semver  =require('semver');
module.exports.aUtil   =  function (){
  console.log('from a util semver.gt  go ',semver.gt('1.0.0','10.0.0'));
}

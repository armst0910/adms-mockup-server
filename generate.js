module.exports = function(){
    var faker = require('faker');
    var _ = require('lodash');
    var priLength = 10;
    var projCode = _.times(priLength, function(n){
        return "ID"+_.random(100000, 200000);
    });
    return {
        pri: _.times(10, function(n){
            return {
                id: n,
                projYear: _.random(2557, 2559),
                projOwnerOrg: faker.company.companyName(),
                projCode: projCode[n],
                projType: _.random(1, 3),
                projName: faker.lorem.sentence(),
                projOrgName: faker.company.companySuffix(),
                projStartDate: faker.date.past(),
                projStopDate: faker.date.future(),
                projDuration: function(){
                    var duration = _.range(30, 360, 30);
                    return duration[_.random(0, duration.length-1)];
                }(),
                projValue: _.random(1000000.0, 10000000.0),
                preSaleProjCode: faker.lorem.word(),
                projStatus: _.random(1, 3)
            }
        }),
        staffResource: _.times(4, function(n){
            return {
                id: n,
                projResourceRef: _.random(0.0, 10.0),
                position: faker.company.companySuffix(),
                empNo: '00'+_.random(1000, 9999),
                empName: faker.name.findName(),
                dateStart: faker.date.past(),
                dateStop: faker.date.future(),
                duration: function(){
                    var duration = _.range(30, 360, 30);
                    return duration[_.random(0, duration.length-1)];
                }(),
                percentWork: function(){
                    var percent = _.range(10, 100, 10);
                    return percent[_.random(0, percent.length-1)];
                }()
            }
        }),
        program: [
            { id: 0, programName: "ขอบเขต" },
            { id: 1, programName: "SDE" },
            { id: 2, programName: "เงื่อนไขโครงการ" },
            { id: 3, programName: "งวดการส่งมอบงาน" },
            { id: 4, programName: "ข้อจำกัด" },
            { id: 5, programName: "Monitoring" },
            { id: 6, programName: "ลูกค้า" },
            { id: 7, programName: "อุปกรณ์" },
            { id: 8, programName: "อบรม" },
            { id: 9, programName: "อื่นๆ" }
        ],
        pritProjScope: _.times(30, function(n){
            return {
                id: n,
                projCode: projCode[_.random(0, priLength-1)],
                scopeDetail: faker.lorem.paragraph()
            }
        }),
        projMethod: _.times(20, function(n){
            return {
                id: n,
                projCode: projCode[_.random(0, priLength-1)],
                methodDetail: faker.lorem.paragraph()
            }
        }),
        projLanguage: _.times(20, function(n){
            return {
                id: n,
                projCode: projCode[_.random(0, priLength-1)],
                languageDetail: faker.address.country()
            }
        }),
        projTools: _.times(20, function(n){
            return {
                id: n,
                projCode: projCode[_.random(0, priLength-1)],
                toolsDetail: faker.lorem.sentence()
            }
        }),
        projCondition: _.times(20, function(n){
            return {
                id: n,
                projCode: projCode[_.random(0, priLength-1)],
                conditionDetail: faker.lorem.sentence()
            }
        }),
        projDelivery: _.times(20, function(n){
            return {
                id: n,
                projCode: projCode[_.random(0, priLength-1)],
                period: _.random(0,10),
                deliverDate: faker.date.future(),
                deliverPercenContract: function(){
                    var percent = _.range(10, 100, 10);
                    return percent[_.random(0, percent.length-1)];
                }(),
                deliverDetail: faker.lorem.sentence()
            }
        }),
        projLimit: _.times(20, function(n){
            return {
                id: n,
                projCode: projCode[_.random(0, priLength-1)],
                limitDetail: faker.lorem.sentence()
            }
        }),
        projMonitor: _.times(20, function(n){
            return {
                id: n,
                projCode: projCode[_.random(0, priLength-1)],
                monitorType: _.random(1, 3),
                monitorDetail: faker.lorem.sentence()
            }
        }),
        projCustomer: _.times(20, function(n){
            return {
                id: n,
                projCode: projCode[_.random(0, priLength-1)],
                fullName: faker.name.firstName()+' '+faker.name.lastName(),
                projPosition: faker.lorem.words(),
                orgPosition: faker.lorem.sentence(),
                tel: faker.phone.phoneNumberFormat(),
                email: faker.internet.email(),
                orgName: faker.company.companyName()
            }
        }),
        projAccessories: _.times(20, function(n){
            return {
                id: n,
                projCode: projCode[_.random(0, priLength-1)],
                accName: faker.lorem.words(),
                accQuantity: _.random(0, 100)
            }
        }),
        projTrain: _.times(20, function(n){
            return {
                id: n,
                projCode: projCode[_.random(0, priLength-1)],
                trainCourse: faker.lorem.sentences(),
                trainDate: _.random(1, 30),
                personAmount: _.random(1, 30)
            }
        }),
        projOther: _.times(20, function(n){
            return {
                id: n,
                projCode: projCode[_.random(0, priLength-1)],
                otherDetail: faker.lorem.sentences()
            }
        }),
        projSystems: _.times(20, function(n){
            return {
                id: n,
                projCode: projCode[_.random(0, priLength-1)],
                systemAbbr: faker.lorem.words(),
                systemName: faker.lorem.sentence(),
                systemDetail: faker.lorem.sentences()
            }
        })
    }
}
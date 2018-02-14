import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { JhipsterFlywayWebRegionMySuffixModule } from './region-my-suffix/region-my-suffix.module';
import { JhipsterFlywayWebCountryMySuffixModule } from './country-my-suffix/country-my-suffix.module';
import { JhipsterFlywayWebLocationMySuffixModule } from './location-my-suffix/location-my-suffix.module';
import { JhipsterFlywayWebDepartmentMySuffixModule } from './department-my-suffix/department-my-suffix.module';
import { JhipsterFlywayWebTaskMySuffixModule } from './task-my-suffix/task-my-suffix.module';
import { JhipsterFlywayWebEmployeeMySuffixModule } from './employee-my-suffix/employee-my-suffix.module';
import { JhipsterFlywayWebJobMySuffixModule } from './job-my-suffix/job-my-suffix.module';
import { JhipsterFlywayWebJobHistoryMySuffixModule } from './job-history-my-suffix/job-history-my-suffix.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    imports: [
        JhipsterFlywayWebRegionMySuffixModule,
        JhipsterFlywayWebCountryMySuffixModule,
        JhipsterFlywayWebLocationMySuffixModule,
        JhipsterFlywayWebDepartmentMySuffixModule,
        JhipsterFlywayWebTaskMySuffixModule,
        JhipsterFlywayWebEmployeeMySuffixModule,
        JhipsterFlywayWebJobMySuffixModule,
        JhipsterFlywayWebJobHistoryMySuffixModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class JhipsterFlywayWebEntityModule {}

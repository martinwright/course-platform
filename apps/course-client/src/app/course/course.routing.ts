import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {
  selectedLessonIdRouteParam,
  selectedSectionIdRouteParam
} from '@course-platform/course-client-lib';
import { AuthGuard } from '@course-platform/shared/feat-auth';
import {
  LessonRouteData,
  LessonTypes
} from '@course-platform/shared/interfaces';
import { ActionItemsComponent } from './containers/action-items/action-items.component';
import { CourseContentComponent } from './containers/course-content/course-content.component';
import { QuestionsComponent } from './containers/questions/questions.component';
import { CourseComponent } from './course.component';
import { CourseResolver } from './resolvers/course.resolver';

const routes: Routes = [
  {
    path: `:${selectedSectionIdRouteParam}`,
    resolve: [CourseResolver],
    component: CourseComponent,
    children: [
      {
        path: `action-items`,
        component: ActionItemsComponent,
        data: { lessonType: LessonTypes.ActionItems } as LessonRouteData
      },
      {
        path: `questions`,
        component: QuestionsComponent,
        data: { lessonType: LessonTypes.Questions } as LessonRouteData
      },
      {
        path: `:${selectedLessonIdRouteParam}`,
        component: CourseContentComponent,
        data: { lessonType: LessonTypes.Lesson } as LessonRouteData
      }
    ]
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeatureRoutingModule {}

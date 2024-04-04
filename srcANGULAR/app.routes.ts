/* Copyright 2024 (Holloway) Chew, Kean Ho <hollowaykeanho@gmail.com>
 *
 *
 * (Holloway) Chew, Kean Ho Proprietary License 1.0
 *
 * Licensed under (Holloway) Chew, Kean Ho Proprietary License (the “License”);
 * you may ONLY use this file except in compliance with the License.
 *
 * All information contained herein is, and remains the property of
 * (Holloway) Chew, Kean Ho and its suppliers, if any. The intellectual and
 * technical concepts contained herein are proprietary to
 * (Holloway) Chew, Kean Ho and its suppliers and may be covered by Malaysia
 * Patent Law, patents in process, and are protected by trade secret or
 * copyright law. Dissemination of this information or reproduction of this
 * material is strictly forbidden unless prior written permission is obtained
 * from (Holloway) Chew, Kean Ho.
 */
import { Routes } from '@angular/router';

import { Page_EN_Root } from "./contents/en/page";




export const routes: Routes = [
	{ path: 'en', component: Page_EN_Root },
	{ path: '**', redirectTo: '/en' }, // 404
];

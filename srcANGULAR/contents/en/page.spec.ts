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
import { TestBed } from '@angular/core/testing';
import { Page_EN_Root } from './page';



describe('Page_EN_Root', () => {
	beforeEach(async () => {
	await TestBed.configureTestingModule({
		imports: [Page_EN_Root],
	}).compileComponents();
	});

	it('should create the app', () => {
		const fixture = TestBed.createComponent(Page_EN_Root);
		const app = fixture.componentInstance;
		expect(app).toBeTruthy();
	});
});

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Subject {
  name: string;
  grades: string;
  description: string;
  isPrivateOnly?: boolean;
}

export interface Feature {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string; // "Parent" or "Student"
  grade?: string;
  improvement?: string;
  stars: number;
  text: string;
  date: string;
}

export interface GalleryItem {
  id: string;
  url: string;
  title: string;
  category: string;
}

export interface Question {
  id: string;
  text: string;
  options: string[];
}

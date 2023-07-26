import ReminderItem from "./reminderItem";
import Project from "./project";
import './style.css';
import 'date-fns';
import { endOfDay } from "date-fns";

const p1 = new Project('p1');
const task1 = new ReminderItem('t1','this task', endOfDay(),'high');
const task2 = new ReminderItem('t2','this task', endOfDay(),'high');

p1.addItem(task1);
p1.addItem(task2);

const sidebar = document.createElement('div');

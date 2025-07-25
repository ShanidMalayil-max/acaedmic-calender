import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Calendar, BookOpen, Users, Clock } from 'lucide-react';

interface CalendarEvent {
  id: string;
  title: string;
  date: string;
  type: 'class' | 'exam' | 'assignment' | 'event';
  color: string;
}

const sampleEvents: CalendarEvent[] = [
  { id: '1', title: 'Summer Session Begins', date: '2024-07-25', type: 'event', color: 'bg-blue-500' },
  { id: '2', title: 'Course Registration Deadline', date: '2024-07-28', type: 'assignment', color: 'bg-red-500' },
  { id: '3', title: 'Midterm Exams', date: '2024-08-05', type: 'exam', color: 'bg-purple-500' },
  { id: '4', title: 'Research Paper Due', date: '2024-08-12', type: 'assignment', color: 'bg-orange-500' },
  { id: '5', title: 'Guest Lecture Series', date: '2024-08-15', type: 'event', color: 'bg-green-500' },
  { id: '6', title: 'Final Project Presentations', date: '2024-08-28', type: 'class', color: 'bg-indigo-500' },
  { id: '7', title: 'Summer Session Ends', date: '2024-08-31', type: 'event', color: 'bg-blue-500' },
];

function App() {
  const [currentMonth, setCurrentMonth] = useState(7); // July = 7
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [events] = useState<CalendarEvent[]>([
    // July Events
    { id: '1', title: 'Summer Session Begins', date: '2024-07-25', type: 'event', color: 'bg-blue-500' },
    { id: '2', title: 'Course Registration Deadline', date: '2024-07-28', type: 'assignment', color: 'bg-red-500' },
    
    // August Events
    { id: '3', title: 'ERP - Odd Sem Timetable Update', date: '2024-08-01', type: 'assignment', color: 'bg-red-500' },
    { id: '4', title: 'Department Academic Calendar', date: '2024-08-02', type: 'assignment', color: 'bg-orange-500' },
    { id: '5', title: 'First Series Result Analysis', date: '2024-08-04', type: 'assignment', color: 'bg-red-500' },
    { id: '6', title: 'Faculty Alignment Program', date: '2024-08-05', type: 'event', color: 'bg-green-500' },
    { id: '7', title: 'Course Selection (S3/S5/S7) Ends', date: '2024-08-06', type: 'assignment', color: 'bg-red-500' },
    { id: '8', title: 'Monthly ERP Status to Principal', date: '2024-08-07', type: 'assignment', color: 'bg-orange-500' },
    { id: '9', title: 'Module Test Report', date: '2024-08-08', type: 'assignment', color: 'bg-orange-500' },
    { id: '10', title: 'Module Completion Report', date: '2024-08-09', type: 'assignment', color: 'bg-orange-500' },
    { id: '11', title: 'Advisory Meeting Minutes', date: '2024-08-11', type: 'assignment', color: 'bg-red-500' },
    { id: '12', title: 'Monthly ERP Status', date: '2024-08-12', type: 'assignment', color: 'bg-orange-500' },
    { id: '13', title: 'Mid-Term Survey - Syllabus', date: '2024-08-13', type: 'exam', color: 'bg-purple-500' },
    { id: '14', title: '78th Independence Day', date: '2024-08-14', type: 'event', color: 'bg-blue-500' },
    { id: '15', title: '78th Independence Day', date: '2024-08-15', type: 'event', color: 'bg-blue-500' },
    { id: '16', title: 'Faculty Meeting', date: '2024-08-16', type: 'event', color: 'bg-green-500' },
    { id: '17', title: 'Internal Lab Completion', date: '2024-08-18', type: 'class', color: 'bg-indigo-500' },
    { id: '18', title: 'Internal Lab Completion', date: '2024-08-19', type: 'class', color: 'bg-indigo-500' },
    { id: '19', title: 'Course Completion Finalization', date: '2024-08-20', type: 'assignment', color: 'bg-red-500' },
    { id: '20', title: 'Department Analysis Report', date: '2024-08-21', type: 'assignment', color: 'bg-orange-500' },
    { id: '21', title: 'Module Completion Reports', date: '2024-08-22', type: 'assignment', color: 'bg-orange-500' },
    { id: '22', title: 'Consolidated Reports', date: '2024-08-23', type: 'assignment', color: 'bg-red-500' },
    { id: '23', title: 'Module Test Report', date: '2024-08-25', type: 'assignment', color: 'bg-orange-500' },
    { id: '24', title: '50% Lab Experiments', date: '2024-08-26', type: 'class', color: 'bg-indigo-500' },
    { id: '25', title: 'Faculty Alignment & Meeting', date: '2024-08-27', type: 'event', color: 'bg-green-500' },
    { id: '26', title: 'Final Assignment Submission', date: '2024-08-28', type: 'assignment', color: 'bg-red-500' },
    { id: '27', title: 'Final IA Marks Submission', date: '2024-08-29', type: 'assignment', color: 'bg-red-500' },
    { id: '28', title: 'Department Final Report', date: '2024-08-30', type: 'assignment', color: 'bg-orange-500' },
    
    // September Events
    { id: '29', title: 'Fall Semester Begins', date: '2024-09-02', type: 'event', color: 'bg-blue-500' },
    { id: '30', title: 'Add/Drop Deadline', date: '2024-09-06', type: 'assignment', color: 'bg-red-500' },
    { id: '31', title: 'Career Fair', date: '2024-09-12', type: 'event', color: 'bg-green-500' },
    { id: '32', title: 'First Quiz Week', date: '2024-09-18', type: 'exam', color: 'bg-purple-500' },
    { id: '33', title: 'Research Proposal Due', date: '2024-09-25', type: 'assignment', color: 'bg-orange-500' },
    
    // October Events
    { id: '34', title: 'Midterm Exam Period', date: '2024-10-07', type: 'exam', color: 'bg-purple-500' },
    { id: '35', title: 'Fall Break', date: '2024-10-14', type: 'event', color: 'bg-green-500' },
    { id: '36', title: 'Graduate School Fair', date: '2024-10-21', type: 'event', color: 'bg-green-500' },
    { id: '37', title: 'Term Paper Draft Due', date: '2024-10-28', type: 'assignment', color: 'bg-orange-500' },
    { id: '38', title: 'Halloween Campus Event', date: '2024-10-31', type: 'event', color: 'bg-orange-500' },
    
    // November Events
    { id: '39', title: 'Registration for Spring', date: '2024-11-04', type: 'assignment', color: 'bg-red-500' },
    { id: '40', title: 'Academic Conference', date: '2024-11-11', type: 'event', color: 'bg-green-500' },
    { id: '41', title: 'Final Project Proposals', date: '2024-11-18', type: 'assignment', color: 'bg-orange-500' },
    { id: '42', title: 'Thanksgiving Break', date: '2024-11-25', type: 'event', color: 'bg-blue-500' },
    { id: '43', title: 'Classes Resume', date: '2024-11-29', type: 'class', color: 'bg-indigo-500' },
  ]);

  const monthNames = ['', '', '', '', '', '', '', 'July', 'August', 'September', 'October', 'November'];
  const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  const getDaysInMonth = (year: number, month: number) => {
    return new Date(year, month, 0).getDate();
  };

  const getFirstDayOfMonth = (year: number, month: number) => {
    return new Date(year, month - 1, 1).getDay();
  };

  const generateCalendarDays = () => {
    const year = 2024;
    const daysInMonth = getDaysInMonth(year, currentMonth);
    const firstDay = getFirstDayOfMonth(year, currentMonth);
    const days = [];

    // Add empty cells for days before the first day of the month
    for (let i = 0; i < firstDay; i++) {
      days.push(null);
    }

    // Add days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      // For July, only show from 25th onwards
      if (currentMonth === 7 && day < 25) {
        continue;
      }
      days.push(day);
    }

    return days;
  };

  const formatDate = (day: number) => {
    return `2024-${currentMonth.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
  };

  const getEventsForDate = (date: string) => {
    return events.filter(event => event.date === date);
  };

  const getEventTypeIcon = (type: string) => {
    switch (type) {
      case 'class': return <BookOpen className="w-3 h-3" />;
      case 'exam': return <Clock className="w-3 h-3" />;
      case 'assignment': return <Calendar className="w-3 h-3" />;
      case 'event': return <Users className="w-3 h-3" />;
      default: return <Calendar className="w-3 h-3" />;
    }
  };

  const days = generateCalendarDays();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 p-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-slate-800 mb-2">Academic Calendar</h1>
          <p className="text-slate-600">Academic Year 2024 • July 25 - November 30</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Calendar */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              {/* Calendar Header */}
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-6">
                <div className="flex items-center justify-between">
                  <button
                    onClick={() => setCurrentMonth(Math.max(7, currentMonth - 1))}
                    disabled={currentMonth === 7}
                    className="p-2 rounded-lg hover:bg-white/20 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  
                  <h2 className="text-2xl font-semibold">{monthNames[currentMonth]} 2024</h2>
                  
                  <button
                    onClick={() => setCurrentMonth(Math.min(11, currentMonth + 1))}
                    disabled={currentMonth === 11}
                    className="p-2 rounded-lg hover:bg-white/20 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </div>
              </div>

              {/* Day Names */}
              <div className="grid grid-cols-7 bg-slate-100">
                {dayNames.map((day) => (
                  <div key={day} className="p-4 text-center font-semibold text-slate-600">
                    {day}
                  </div>
                ))}
              </div>

              {/* Calendar Grid */}
              <div className="grid grid-cols-7">
                {days.map((day, index) => {
                  if (day === null) {
                    return <div key={index} className="h-32 border border-slate-200"></div>;
                  }

                  const dateString = formatDate(day);
                  const dayEvents = getEventsForDate(dateString);
                  const isSelected = selectedDate === dateString;
                  const isToday = dateString === new Date().toISOString().split('T')[0];

                  return (
                    <div
                      key={day}
                      onClick={() => setSelectedDate(dateString)}
                      className={`h-32 border border-slate-200 p-2 cursor-pointer transition-all hover:bg-blue-50 ${
                        isSelected ? 'bg-blue-100 ring-2 ring-blue-400' : ''
                      } ${isToday ? 'bg-yellow-50' : ''}`}
                    >
                      <div className={`text-sm font-semibold mb-1 ${isToday ? 'text-blue-600' : 'text-slate-700'}`}>
                        {day}
                      </div>
                      
                      <div className="space-y-1">
                        {dayEvents.slice(0, 2).map((event) => (
                          <div
                            key={event.id}
                            className={`text-xs px-2 py-1 rounded text-white flex items-center gap-1 ${event.color}`}
                          >
                            {getEventTypeIcon(event.type)}
                            <span className="truncate">{event.title}</span>
                          </div>
                        ))}
                        {dayEvents.length > 2 && (
                          <div className="text-xs text-slate-500 px-2">
                            +{dayEvents.length - 2} more
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Stats */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-slate-800 mb-4">Session Overview</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-slate-600">Academic Period</span>
                  <span className="font-semibold text-slate-800">5 Months</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-600">Events</span>
                  <span className="font-semibold text-slate-800">{events.length}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-600">Current Month</span>
                  <span className="font-semibold text-slate-800">{monthNames[currentMonth]}</span>
                </div>
              </div>
            </div>

            {/* Upcoming Events */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-slate-800 mb-4">Upcoming Events</h3>
              <div className="space-y-3">
                {events
                  .filter(event => new Date(event.date) >= new Date())
                  .slice(0, 5)
                  .map((event) => (
                  <div key={event.id} className="flex items-start gap-3 p-3 rounded-lg hover:bg-slate-50 transition-colors">
                    <div className={`w-3 h-3 rounded-full ${event.color} mt-1.5 flex-shrink-0`}></div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-slate-800 truncate">{event.title}</p>
                      <p className="text-xs text-slate-500">
                        {new Date(event.date).toLocaleDateString('en-US', { 
                          month: 'short', 
                          day: 'numeric' 
                        })}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Legend */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-slate-800 mb-4">Event Types</h3>
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                  <span className="text-sm text-slate-600">Session Events</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-purple-500"></div>
                  <span className="text-sm text-slate-600">Exams</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-orange-500"></div>
                  <span className="text-sm text-slate-600">Assignments</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <span className="text-sm text-slate-600">Special Events</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Selected Date Details */}
        {selectedDate && (
          <div className="mt-8 bg-white rounded-2xl shadow-lg p-6">
            <h3 className="text-xl font-semibold text-slate-800 mb-4">
              {new Date(selectedDate).toLocaleDateString('en-US', { 
                weekday: 'long', 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </h3>
            
            {getEventsForDate(selectedDate).length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {getEventsForDate(selectedDate).map((event) => (
                  <div key={event.id} className="border border-slate-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-2 mb-2">
                      <div className={`w-4 h-4 rounded ${event.color} flex items-center justify-center text-white`}>
                        {getEventTypeIcon(event.type)}
                      </div>
                      <h4 className="font-semibold text-slate-800">{event.title}</h4>
                    </div>
                    <p className="text-sm text-slate-600 capitalize">{event.type}</p>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-slate-500 italic">No events scheduled for this date.</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
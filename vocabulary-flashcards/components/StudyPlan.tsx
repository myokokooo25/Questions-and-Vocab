
import React from 'react';

interface StudyPlanProps {
  studyProgress: Record<number, number[]>; // dayIndex -> array of learned word IDs
  onSelectDay: (dayIndex: number) => void;
  totalDays: number;
  wordsPerDay: number;
}

const StudyPlan: React.FC<StudyPlanProps> = ({ studyProgress, onSelectDay, totalDays, wordsPerDay }) => {
  return (
    <div className="w-full max-w-4xl p-4 bg-neumorphic-bg shadow-neumorphic-inset rounded-xl">
        <h2 className="text-2xl font-bold text-slate-700 text-center mb-6">40 DAYS Study Plan</h2>
      <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-8 lg:grid-cols-10 gap-4">
        {Array.from({ length: totalDays }).map((_, dayIndex) => {
          const learnedCount = studyProgress[dayIndex]?.length || 0;
          const progressPercent = (learnedCount / wordsPerDay) * 100;
          const isCompleted = learnedCount >= wordsPerDay;

          return (
            <button
              key={dayIndex}
              onClick={() => onSelectDay(dayIndex)}
              className="bg-neumorphic-bg shadow-neumorphic-outset active:shadow-neumorphic-inset rounded-lg aspect-square flex flex-col items-center justify-center p-2 relative overflow-hidden transition-transform duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label={`Start study for Day ${dayIndex + 1}. Progress: ${learnedCount} of ${wordsPerDay} words.`}
            >
              <div
                className="absolute bottom-0 left-0 h-full bg-blue-500/40"
                style={{
                  width: `${progressPercent}%`,
                  transition: 'width 0.5s ease',
                }}
                aria-hidden="true"
              />
              <span className="relative text-xs text-slate-500 z-10">Day</span>
              <span className="relative text-2xl font-bold text-slate-700 z-10">{dayIndex + 1}</span>
              <span className="relative text-xs text-slate-500 z-10">
                {learnedCount}/{wordsPerDay}
              </span>
              {isCompleted && (
                <div 
                    className="absolute top-1 right-1 bg-green-500 rounded-full h-3 w-3 z-20 shadow-neumorphic-outset" 
                    title="Completed"
                    aria-label="Day completed"
                ></div>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default StudyPlan;
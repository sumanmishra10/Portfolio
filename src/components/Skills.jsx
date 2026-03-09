import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { motion } from 'framer-motion';
import { GripVertical } from 'lucide-react';

const initialSkills = {
  frontend: {
    id: 'frontend',
    title: 'Frontend Development',
    items: [
      { id: 'item-1', content: 'React' },
      { id: 'item-2', content: 'Tailwind CSS' },
      { id: 'item-3', content: 'Vanilla Javascript' },
      { id: 'item-4', content: 'HTML & CSS' },
      { id: 'item-5', content: 'JQuery' },
      { id: 'item-6', content: 'Flutter' },
    ],
  },
  backend: {
    id: 'backend',
    title: 'Backend Development',
    items: [
      { id: 'item-7', content: 'ASP.NET Core/MVC' },
      { id: 'item-8', content: 'C#' },
      { id: 'item-9', content: 'REST APIs' },
    ],
  },
  database: {
    id: 'database',
    title: 'Databases & Tools',
    items: [
      { id: 'item-10', content: 'MSSQL' },
      { id: 'item-11', content: 'PostgreSQL' },
      { id: 'item-12', content: 'IIS & Cloudflare' },
      { id: 'item-13', content: 'VPS Hosting' },
      { id: 'item-14', content: 'Git & TFS' },
    ],
  },
};

const Skills = () => {
  const [columns, setColumns] = useState(initialSkills);

  const onDragEnd = (result, columns, setColumns) => {
    if (!result.destination) return;
    const { source, destination } = result;

    if (source.droppableId !== destination.droppableId) {
      const sourceColumn = columns[source.droppableId];
      const destColumn = columns[destination.droppableId];
      const sourceItems = [...sourceColumn.items];
      const destItems = [...destColumn.items];
      const [removed] = sourceItems.splice(source.index, 1);
      destItems.splice(destination.index, 0, removed);
      setColumns({
        ...columns,
        [source.droppableId]: {
          ...sourceColumn,
          items: sourceItems,
        },
        [destination.droppableId]: {
          ...destColumn,
          items: destItems,
        },
      });
    } else {
      const column = columns[source.droppableId];
      const copiedItems = [...column.items];
      const [removed] = copiedItems.splice(source.index, 1);
      copiedItems.splice(destination.index, 0, removed);
      setColumns({
        ...columns,
        [source.droppableId]: {
          ...column,
          items: copiedItems,
        },
      });
    }
  };

  return (
    <section id="skills" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 space-y-4"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white">
            Technical <span className="text-primary">Arsenal</span>
          </h2>
          <p className="text-text-muted mt-4 max-w-2xl mx-auto">
            Interactive skill board. Drag and drop to reorganize my tech stack.
          </p>
        </motion.div>

        <DragDropContext onDragEnd={(result) => onDragEnd(result, columns, setColumns)}>
          <div className="grid md:grid-cols-3 gap-8">
            {Object.entries(columns).map(([columnId, column], index) => {
              return (
                <motion.div
                  key={columnId}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  className="glass p-6 rounded-3xl"
                >
                  <h3 className="text-xl font-semibold text-white mb-6 pl-2 border-l-4 border-primary">
                    {column.title}
                  </h3>
                  <Droppable droppableId={columnId}>
                    {(provided, snapshot) => {
                      return (
                        <div
                          {...provided.droppableProps}
                          ref={provided.innerRef}
                          className={`min-h-[200px] transition-colors rounded-xl p-2 ${
                            snapshot.isDraggingOver ? 'bg-white/5' : ''
                          }`}
                        >
                          {column.items.map((item, index) => {
                            return (
                              <Draggable key={item.id} draggableId={item.id} index={index}>
                                {(provided, snapshot) => {
                                  return (
                                    <div
                                      ref={provided.innerRef}
                                      {...provided.draggableProps}
                                      {...provided.dragHandleProps}
                                      className={`mb-3 p-4 rounded-xl flex items-center gap-3 active:cursor-grabbing backdrop-blur-md border transition-all ${
                                        snapshot.isDragging
                                          ? 'border-primary shadow-[0_0_15px_rgba(59,130,246,0.5)] bg-surface text-white z-50'
                                          : 'border-white/10 bg-white/5 text-text-muted hover:text-white hover:border-white/20'
                                      }`}
                                      style={{ ...provided.draggableProps.style }}
                                    >
                                      <GripVertical className="opacity-40" size={18} />
                                      <span className="font-medium tracking-wide">{item.content}</span>
                                    </div>
                                  );
                                }}
                              </Draggable>
                            );
                          })}
                          {provided.placeholder}
                        </div>
                      );
                    }}
                  </Droppable>
                </motion.div>
              );
            })}
          </div>
        </DragDropContext>
      </div>
    </section>
  );
};

export default Skills;

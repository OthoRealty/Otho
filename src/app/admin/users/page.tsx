'use client';

import { useState, useEffect } from 'react';
import { UserCog, Plus, Search, Edit2, Trash2, CheckCircle, XCircle, Shield, Key } from 'lucide-react';
import { cn } from '@/lib/utils';

interface AdminUser {
  id: string;
  name: string;
  email: string;
  department: 'Management' | 'Advisory & Research' | 'Transactions & Sales' | 'Marketing' | 'CRM & Operations';
  role: 'Super Admin' | 'Advisory Principal' | 'Content Editor' | 'CRM Specialist';
  isActive: boolean;
  lastActive: string;
}

const DEFAULT_USERS: AdminUser[] = [
  {
    id: 'usr-1',
    name: 'Kiran Basa',
    email: 'contact@otho.co.in',
    department: 'Management',
    role: 'Super Admin',
    isActive: true,
    lastActive: 'Just now',
  },
  {
    id: 'usr-2',
    name: 'Advisory Principal',
    email: 'research@otho.co.in',
    department: 'Advisory & Research',
    role: 'Advisory Principal',
    isActive: true,
    lastActive: '2 hours ago',
  },
  {
    id: 'usr-3',
    name: 'CRM Coordinator',
    email: 'desk@otho.co.in',
    department: 'CRM & Operations',
    role: 'CRM Specialist',
    isActive: true,
    lastActive: 'Yesterday',
  },
];

const ROLE_PERMISSIONS = [
  { role: 'Super Admin', perms: ['All Systems Access', 'User & Role Management', 'Project CRUD', 'Intelligence Publishing', 'CRM & Leads Management', 'Media Uploads & Deletion', 'Database Settings'] },
  { role: 'Advisory Principal', perms: ['Project CRUD', 'Intelligence Publishing', 'View Analytics', 'View Leads & Notes', 'Media Uploads'] },
  { role: 'Content Editor', perms: ['Intelligence Publishing', 'Media Uploads', 'View Projects'] },
  { role: 'CRM Specialist', perms: ['View & Manage Leads', 'Add Client Notes', 'View Projects & Dossiers'] },
];

export default function AdminUsersPage() {
  const [users, setUsers] = useState<AdminUser[]>(DEFAULT_USERS);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState<'users' | 'roles'>('users');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingUser, setEditingUser] = useState<AdminUser | null>(null);

  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    department: 'Advisory & Research' as AdminUser['department'],
    role: 'Advisory Principal' as AdminUser['role'],
    password: '',
  });

  // Load from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('otho_admin_users');
    if (saved) {
      try {
        setUsers(JSON.parse(saved));
      } catch (e) {
        console.error('Failed to parse saved users', e);
      }
    }
  }, []);

  const saveUsers = (updated: AdminUser[]) => {
    setUsers(updated);
    localStorage.setItem('otho_admin_users', JSON.stringify(updated));
  };

  const handleOpenAdd = () => {
    setEditingUser(null);
    setFormData({
      name: '',
      email: '',
      department: 'Advisory & Research',
      role: 'Advisory Principal',
      password: '',
    });
    setIsModalOpen(true);
  };

  const handleOpenEdit = (user: AdminUser) => {
    setEditingUser(user);
    setFormData({
      name: user.name,
      email: user.email,
      department: user.department,
      role: user.role,
      password: '',
    });
    setIsModalOpen(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;

    if (editingUser) {
      const updated = users.map((u) =>
        u.id === editingUser.id
          ? {
              ...u,
              name: formData.name,
              email: formData.email,
              department: formData.department,
              role: formData.role,
            }
          : u
      );
      saveUsers(updated);
    } else {
      const newUser: AdminUser = {
        id: `usr-${Date.now()}`,
        name: formData.name,
        email: formData.email,
        department: formData.department,
        role: formData.role,
        isActive: true,
        lastActive: 'Never',
      };
      saveUsers([...users, newUser]);
    }

    setIsModalOpen(false);
  };

  const handleToggleStatus = (id: string) => {
    const updated = users.map((u) => (u.id === id ? { ...u, isActive: !u.isActive } : u));
    saveUsers(updated);
  };

  const handleDelete = (id: string) => {
    if (confirm('Are you sure you want to delete this user?')) {
      const updated = users.filter((u) => u.id !== id);
      saveUsers(updated);
    }
  };

  const filtered = users.filter(
    (u) =>
      u.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      u.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      u.department.toLowerCase().includes(searchTerm.toLowerCase()) ||
      u.role.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="font-serif text-3xl text-foreground flex items-center gap-3">
            <UserCog className="text-accent" /> Team & User Management
          </h1>
          <p className="font-sans text-muted-foreground mt-1">
            Manage authenticated advisory principals, research analysts, and access permissions.
          </p>
        </div>
        <button
          onClick={handleOpenAdd}
          className="inline-flex items-center gap-2 bg-foreground text-background font-mono text-xs uppercase tracking-widest px-4 py-2.5 rounded hover:bg-accent hover:text-accent-foreground transition-colors font-semibold"
        >
          <Plus size={14} /> Add User
        </button>
      </div>

      {/* Navigation Tabs */}
      <div className="flex border-b border-border gap-6">
        <button
          onClick={() => setActiveTab('users')}
          className={cn(
            'pb-3 font-mono text-xs uppercase tracking-wider transition-colors border-b-2',
            activeTab === 'users'
              ? 'border-accent text-accent font-semibold'
              : 'border-transparent text-muted-foreground hover:text-foreground'
          )}
        >
          Team Members ({users.length})
        </button>
        <button
          onClick={() => setActiveTab('roles')}
          className={cn(
            'pb-3 font-mono text-xs uppercase tracking-wider transition-colors border-b-2',
            activeTab === 'roles'
              ? 'border-accent text-accent font-semibold'
              : 'border-transparent text-muted-foreground hover:text-foreground'
          )}
        >
          Role Permissions Matrix
        </button>
      </div>

      {activeTab === 'users' ? (
        <>
          {/* Search bar */}
          <div className="bg-card border border-border rounded-xl px-4 py-2.5 flex items-center gap-3 max-w-md">
            <Search size={16} className="text-muted-foreground" />
            <input
              type="text"
              placeholder="Search by name, email, department..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="bg-transparent border-none outline-none font-sans text-sm w-full text-foreground placeholder:text-muted-foreground"
            />
          </div>

          {/* Users Table */}
          <div className="bg-card border border-border rounded-xl overflow-hidden overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[800px]">
              <thead>
                <tr className="bg-muted border-b border-border">
                  <th className="p-4 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">User</th>
                  <th className="p-4 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Department</th>
                  <th className="p-4 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Role</th>
                  <th className="p-4 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Status</th>
                  <th className="p-4 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Last Active</th>
                  <th className="p-4 font-mono text-[10px] uppercase tracking-widest text-muted-foreground text-right">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((user) => (
                  <tr key={user.id} className="border-b border-border last:border-0 hover:bg-muted/40 transition-colors">
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-full bg-accent/15 border border-accent/30 text-accent flex items-center justify-center font-mono text-xs font-semibold">
                          {user.name
                            .split(' ')
                            .map((n) => n[0])
                            .slice(0, 2)
                            .join('')}
                        </div>
                        <div>
                          <p className="font-sans text-sm font-medium text-foreground">{user.name}</p>
                          <p className="font-mono text-xs text-muted-foreground">{user.email}</p>
                        </div>
                      </div>
                    </td>
                    <td className="p-4 font-sans text-xs text-muted-foreground">{user.department}</td>
                    <td className="p-4">
                      <span className="font-mono text-[11px] px-2 py-0.5 rounded bg-muted border border-border text-foreground font-medium">
                        {user.role}
                      </span>
                    </td>
                    <td className="p-4">
                      <span
                        className={cn(
                          'inline-flex items-center gap-1 font-mono text-[10px] uppercase px-2 py-0.5 rounded font-semibold',
                          user.isActive
                            ? 'bg-green-500/10 text-green-500 border border-green-500/20'
                            : 'bg-red-500/10 text-red-500 border border-red-500/20'
                        )}
                      >
                        {user.isActive ? <CheckCircle size={10} /> : <XCircle size={10} />}
                        {user.isActive ? 'Active' : 'Suspended'}
                      </span>
                    </td>
                    <td className="p-4 font-mono text-xs text-muted-foreground">{user.lastActive}</td>
                    <td className="p-4 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <button
                          onClick={() => handleToggleStatus(user.id)}
                          title={user.isActive ? 'Suspend User' : 'Activate User'}
                          className="p-1.5 rounded hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
                        >
                          {user.isActive ? <XCircle size={14} /> : <CheckCircle size={14} className="text-green-500" />}
                        </button>
                        <button
                          onClick={() => handleOpenEdit(user)}
                          title="Edit User"
                          className="p-1.5 rounded hover:bg-muted text-muted-foreground hover:text-accent transition-colors"
                        >
                          <Edit2 size={14} />
                        </button>
                        <button
                          onClick={() => handleDelete(user.id)}
                          title="Delete User"
                          className="p-1.5 rounded hover:bg-muted text-muted-foreground hover:text-red-500 transition-colors"
                        >
                          <Trash2 size={14} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      ) : (
        /* Roles Matrix */
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {ROLE_PERMISSIONS.map((rp) => (
            <div key={rp.role} className="bg-card border border-border rounded-xl p-6 space-y-4">
              <div className="flex items-center gap-3">
                <Shield className="text-accent" size={20} />
                <h3 className="font-serif text-lg text-foreground font-medium">{rp.role}</h3>
              </div>
              <div className="space-y-2 pt-2 border-t border-border/60">
                {rp.perms.map((p, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs font-sans text-muted-foreground">
                    <CheckCircle size={12} className="text-accent shrink-0" />
                    <span>{p}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Add / Edit Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-card border border-border rounded-xl p-6 sm:p-8 max-w-md w-full shadow-2xl space-y-6">
            <div className="flex items-center justify-between border-b border-border pb-4">
              <h2 className="font-serif text-xl text-foreground">
                {editingUser ? 'Edit User Details' : 'Add Team Member'}
              </h2>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-muted-foreground hover:text-foreground text-sm font-mono"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Anand Varma"
                  className="w-full bg-background border border-border rounded p-2.5 font-sans text-sm text-foreground focus:outline-none focus:border-accent"
                />
              </div>

              <div>
                <label className="block font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-1">
                  Corporate Email
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="name@otho.co.in"
                  className="w-full bg-background border border-border rounded p-2.5 font-sans text-sm text-foreground focus:outline-none focus:border-accent"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-1">
                    Department
                  </label>
                  <select
                    value={formData.department}
                    onChange={(e) => setFormData({ ...formData, department: e.target.value as AdminUser['department'] })}
                    className="w-full bg-background border border-border rounded p-2.5 font-sans text-xs text-foreground focus:outline-none focus:border-accent"
                  >
                    <option value="Management">Management</option>
                    <option value="Advisory & Research">Advisory & Research</option>
                    <option value="Transactions & Sales">Transactions & Sales</option>
                    <option value="Marketing">Marketing</option>
                    <option value="CRM & Operations">CRM & Operations</option>
                  </select>
                </div>

                <div>
                  <label className="block font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-1">
                    Role
                  </label>
                  <select
                    value={formData.role}
                    onChange={(e) => setFormData({ ...formData, role: e.target.value as AdminUser['role'] })}
                    className="w-full bg-background border border-border rounded p-2.5 font-sans text-xs text-foreground focus:outline-none focus:border-accent"
                  >
                    <option value="Super Admin">Super Admin</option>
                    <option value="Advisory Principal">Advisory Principal</option>
                    <option value="Content Editor">Content Editor</option>
                    <option value="CRM Specialist">CRM Specialist</option>
                  </select>
                </div>
              </div>

              {!editingUser && (
                <div>
                  <label className="block font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-1">
                    Initial Password
                  </label>
                  <input
                    type="password"
                    placeholder="••••••••"
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    className="w-full bg-background border border-border rounded p-2.5 font-sans text-sm text-foreground focus:outline-none focus:border-accent"
                  />
                </div>
              )}

              <div className="flex justify-end gap-3 pt-4 border-t border-border">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="font-mono text-xs uppercase tracking-wider px-4 py-2 border border-border rounded text-muted-foreground hover:text-foreground"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="font-mono text-xs uppercase tracking-wider px-5 py-2 bg-foreground text-background hover:bg-accent hover:text-accent-foreground font-semibold rounded"
                >
                  {editingUser ? 'Save Changes' : 'Create User'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\JobPosting;

class JobPostingController extends Controller
{
    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'job_title' => 'required|max:255',
            'job_description' => 'required',
            'salary' => 'required|numeric',
            'employer_id' => 'required|exists:employers,id',
        ]);

        $jobPosting = new JobPosting($validatedData);
        $jobPosting->save();
        

        return response()->json(['message' => 'Job listing created successfully', 'data' => $jobPosting]);
    }

    public function index()
    {
        $jobPostings = JobPosting::all();

        return response()->json(['data' => $jobPostings]);
}

}
